import { useRouter } from "next/router";

export default function Content({site}) {

  const router = useRouter();

  return (

    <>
      <div id="content" className="montserrat">
        
        { router.query[site.page] }
       
      </div>
    </>

  )
}

