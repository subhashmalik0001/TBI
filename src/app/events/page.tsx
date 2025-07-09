import Navbar from '../../components/Navbar';

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <div className="h-31 bg-white">

      </div>
      <div className="flex min-h-screen w-full bg-white">
        <iframe
          src="https://calender-one-azure.vercel.app/"
          className="w-full h-screen border-0 bg-white"
          style={{ minHeight: '100vh' }}
          allowFullScreen
          title="Event Calendar"
        />
      </div>
    </>
  );
}
