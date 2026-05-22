import Image from "next/image";
import fond_main from "@/../public/assets/fond_mer.jpg";

export default function ImageFond() {
	return (
		<Image
			src={fond_main}
			alt="Photo de la plage d'arcachon"
			className="h-svh -z-1  opacity-25 absolute object-cover"
			loading="eager"
		/>
	);
}
