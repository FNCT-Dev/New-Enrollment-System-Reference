import dynamic from "next/dynamic";

const PlasmicHost = dynamic(() => import("../components/PlasmicHost"), {
  ssr: false,
});

export default PlasmicHost;
