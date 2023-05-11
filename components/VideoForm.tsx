export default function VideoForm() {
  return (
    <form>
      <div className="flex flex-col md:flex-row items-center">
        <div className="form-control w-full">
          <div className="flex">
            <input
              type="text"
              placeholder="https://www.youtube.com/watch?v=P1ww1IXRfTA"
              className="input input-bordered w-full max-w-md"
            />
            <button type="submit" className="btn btn-primary ms-2">
              Submit
            </button>
          </div>
          <label className="label">
            <span className="label-text-alt">
              Please enter the URL of the YouTube video you would like to summarize.
            </span>
          </label>
        </div>
      </div>
    </form>
  )
}
