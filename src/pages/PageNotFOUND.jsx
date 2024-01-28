import React from 'react'
import {Link} from "react-router-dom"

function PageNotFOUND() {
  return (
    <>
    <h1>404- Sayfa Bulunamadı</h1>
    <Link to="/" className="btn btn-info">Ana Sayfaya gitmek için tıklayın</Link>
    </>
  )
}

export default PageNotFOUND
