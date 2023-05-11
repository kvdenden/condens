import { NextRequest, NextResponse } from 'next/server'

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function POST(req: NextRequest, res: NextResponse) {
  const { videoId } = await req.json()
  console.log('Video id', videoId)

  await sleep(10_000) // 10 seconds

  // TODO:
  // - enqueue job to process video

  return NextResponse.json({ videoId }, { status: 202 })
}
