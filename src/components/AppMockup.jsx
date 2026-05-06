import './AppMockup.css';

export default function AppMockup({ children }) {
  return (
    <div className="mockup-container animate-float delay-200">
      <div className="mockup-notch"></div>
      <div className="mockup-screen">
        {children || (
          <div className="mockup-placeholder">
            <img src="/logo.svg" alt="Naero Logo" className="mockup-logo" />
            <div className="mockup-loader"></div>
            <p className="text-sm mt-4 text-muted">Naero is starting...</p>
          </div>
        )}
      </div>
    </div>
  );
}
