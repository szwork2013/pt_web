import React, {PropTypes} from 'react'
import {Button} from 'antd'

const MarkSearch = ({onAdd}) => {

  return (
    <div>
      <Button type="ghost" onClick={onAdd}>添加</Button>
    </div>
  )
}

MarkSearch.propTypes = {
  onAdd: PropTypes.func
}

export default MarkSearch
