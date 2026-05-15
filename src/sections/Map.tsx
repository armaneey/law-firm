import map from "../assets/map.svg";

export function Map() {
  return (
    <section className="h-[300px] w-full">
      <img 
        src={map} 
        alt="Map" 
        className="h-full w-full object-cover"
      />
    </section>
  );
}
