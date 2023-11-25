import { useLayoutEffect } from "react";

export default function Paginator({site}) {

  const mapContentToPaginatorIdEng = {
    Statement: 1,
    Essay: 2,
    Curator: 3,
    Autosave: 4,  
    Confidential: 5,
    Illumination: 6,
    Butterflies: 7,
    Domestik: 8,
  }

  const mapContentToPaginatorIdZh = {
    StatementZh: 1,
    AutosaveZh: 4,
    ConfidentialZh: 5,
    IlluminationZh: 6,
    ButterfliesZh: 7,
    DomestikZh: 8,
  }

  const paginatorElements = () => {

    if (site.language == 'english') {

      return 
      mapContentToPaginatorIdEng.values.map((number, index) => 
      <ellipse rx="50px" ry="50px"></ellipse>
      )
    } else {
      
    }
  }

  useLayoutEffect(() => {

  }, [])

  return (

    <>

      <div id="paginator">
      {paginatorElements}
      </div>

    </>
  );
}