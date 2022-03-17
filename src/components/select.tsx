import React from "react";
import { Select as ImportedSelect} from '@chakra-ui/react'

const Select = () => {

    return (
        <ImportedSelect placeholder='Select option'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
        </ImportedSelect>
    )
  }
  
  export default Select;