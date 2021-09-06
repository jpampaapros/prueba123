import React, {useRef} from 'react';
import GoogleMapReact from 'google-map-react';
import './Mapa.css';

export default function Mapa1() {

  const ubicacionMapa = useRef(null);

  const AnyReactComponent = ({referencia, idEle}) => <div className="box-mapa" id={idEle} ref={referencia}><b>HOLA MUNDO</b></div>;

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  const createMapOptions = (maps) =>{
    return {
      panControl: false,
      mapTypeControl: false,
      scrollwheel: false,
      // styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
      styles: [{ stylers: [{ 'saturation': -100 }] }]
    }
  }

  const onClickButton = () =>{
    // console.log("ubicacio",ubicacionMapa);
    let ele = document.getElementById("mapaIcon");
    ele.style.display = "none";
  }

  return (
    <section style={{ height: '100vh', width: '100%' }}>
      <button onClick={onClickButton}>boton</button>
      <GoogleMapReact
        options={createMapOptions}
        bootstrapURLKeys={{ key: 'AIzaSyAiZ_v1yAaNJnm8WPl6UKlfywKd0rDW8bk&#038' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={10.99835602}
          lng={77.01502627}
          referencia={ubicacionMapa}
          idEle="mapaIcon"
        />
      </GoogleMapReact>
    </section>
  );

}