'use client'

import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'

function getVideoId(url: string) {
  const patterns = [
    /youtu\.be\/([^#\&\?]{11})/,
    /\?v=([^#\&\?]{11})/,
    /\&v=([^#\&\?]{11})/,
    /embed\/([^#\&\?]{11})/,
    /\/v\/([^#\&\?]{11})/,
  ]

  for (let i = 0; i < patterns.length; ++i) {
    const match = url.match(patterns[i])
    if (match) {
      return match[1]
    }
  }

  return null
}

export default function VideoForm() {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      videoUrl: '',
    },
  })

  const mutation = useMutation({
    mutationFn: (videoId: string) =>
      fetch('/api/video', { method: 'POST', body: JSON.stringify({ videoId }) }).then((res) => res.json()),
    onSuccess: (data) => {
      console.log('data', data)
    },
  })

  const onSubmit = (data: any) => {
    const videoId = getVideoId(data.videoUrl)
    if (videoId) {
      return mutation.mutate(videoId)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col md:flex-row items-center">
        <div className="form-control w-full">
          <div className="flex">
            <input
              type="text"
              required
              placeholder="https://www.youtube.com/watch?v=P1ww1IXRfTA"
              className={`input input-bordered w-full max-w-md ${formState.errors.videoUrl ? 'input-error' : ''}`}
              {...register('videoUrl', { validate: (value) => !!getVideoId(value) })}
            />
            <button
              type="submit"
              className={`btn btn-primary ms-2 ${mutation.isLoading ? 'loading' : ''}`}
              disabled={mutation.isLoading}
            >
              Submit
            </button>
          </div>
          <label className="label">
            <span className="label-text-alt">
              Please enter the URL of the YouTube video you would like to summarize.
            </span>
          </label>
        </div>
        <pre>{formState.errors.videoUrl?.message}</pre>
        <pre>{mutation.status}</pre>
      </div>
    </form>
  )
}
