import '@google/model-viewer';
import { useLoaderData } from 'react-router-dom';
import './ArModelPage.css';

const ArModelPage = () => {
  const car = useLoaderData();

  return (
    // <div className="armodelpage-container">
    <model-viewer
      src={`/${car.ar_name}`} // only works for public path
      ar
      ar-modes="scene-viewer webxr"
      ar-placement="floor"
      camera-controls
      auto-rotate
      alt={`A 3D model of ${car.make} ${car.model}`}
    >
      <button slot="ar-button" className="ar-button">
        View in your space
      </button>
    </model-viewer>
    // </div>
  );
};

const carLoader = async ({ params }) => {
  // const res = await fetch(`http://localhost:8000/cars/${params.id}`);
  const res = await fetch(`http://192.168.1.47:8000/cars/${params.id}`);

  const data = await res.json();
  return data;
};

export { ArModelPage as default, carLoader };

{
  /* <model-viewer src="datsun-transformed.glb" ar 
  ar-modes="webxr scene-viewer quick-look" 
  camera-controls tone-mapping="neutral" poster="poster.png" shadow-intensity="1">
    <div class="progress-bar hide" slot="progress-bar">
        <div class="update-bar"></div>
    </div>
    <button slot="ar-button" id="ar-button">
        View in your space
    </button>
    <div id="ar-prompt">
        <img src="https://modelviewer.dev/shared-assets/icons/hand.png">
    </div>
</model-viewer> */
}
