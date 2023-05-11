import VideoForm from './VideoForm'

export default function Hero() {
  return (
    <section className="hero min-h-screen bg-base-200 text-base-content">
      <div className="hero-content w-full">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4">Get straight to the point with Condens</h1>
          <p className="text-lg mb-8">Effortlessly extract the insights you need from any podcast</p>
          <VideoForm />
        </div>
      </div>
    </section>
  )
}
