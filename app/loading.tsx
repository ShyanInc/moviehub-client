import "./loading.sass"
export default function Preloader() {
  return (
    <main>
      <div className="loading-spinner">
        <div className="load">
          <div></div>
          <div></div>
        </div>
      </div>
    </main >
  );
}
