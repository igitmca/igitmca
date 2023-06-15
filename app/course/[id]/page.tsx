import React from 'react'

const DynamicCourse = ({params}:{params:{id:string}}) => {
  return (
    <div>{params.id}</div>
  )
}

export default DynamicCourse