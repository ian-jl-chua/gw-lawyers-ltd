export default function Contact() {
  return (
    <section className="section">
      <h1 className="section-title">Our Office</h1>
      <>
        <h2 className="px-2 text-xl font-bold">Auckland location</h2>
        <div className="flex flex-wrap lg:grid lg:grid-cols-2 ">
          <iframe
            className="px-2 py-4 w-full aspect-square"
            // width={768}
            // height={500}
            src="http://maps.google.co.nz/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=37+Totara+Avenue,+New+Lynn,+Auckland&amp;sll=-36.909573,174.68202&amp;sspn=0.011821,0.019205&amp;ie=UTF8&amp;hq=&amp;hnear=37+Totara+Ave,+New+Lynn+0600,+Auckland&amp;z=15&amp;ll=-36.909573,174.68202&amp;output=embed"
          ></iframe>
          <div className="p-4 text-sm grid grid-cols-2 gap-4">
            <div className="">
              Office 3
              <br />
              37 Totara Ave
              <br />
              New Lynn
              <br />
              Auckland 0600
            </div>
            <div>
              PO Box 15799
              <br />
              New Lynn
              <br />
              Auckland 0640
            </div>
            <div className="col-span-2">
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
              adipisci dolorem! Reprehenderit aspernatur, itaque corporis
              repellendus asperiores repellat nam autem dolor molestias
              molestiae a, voluptate enim quisquam delectus explicabo iusto.
            </div>
          </div>
        </div>
      </>
    </section>
  )
}

// NOTE: YOU CAN USE THE CODE BELOW IF YOU ARE USING GOOGLE MAP API, BUT FOR NOW THE ABOVE CODE IS USED FOR SIMPLICITY SAKE

// import { useMemo } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// export default function Contact() {
//  const { isLoaded } = useLoadScript({
//    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//  });

//  if (!isLoaded) return <div>Loading...</div>;
//  return <Map />;
// }

// function Map() {
//  const center = useMemo(() => ({ lat: -36.9095, lng: 174.6821 }), []);

//  return (
//    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
//      <Marker position={center} />
//    </GoogleMap>
//  );
// }
