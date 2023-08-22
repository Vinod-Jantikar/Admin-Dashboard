import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Header from 'components/Header';
import OverViewChart from 'components/OverViewChart';
import React from 'react'
import { useState } from 'react'

const OverView = () => {
  const [view, setView] = useState("units");
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="OVERVIEW" subTitle="Overview of general revenue and profit" />

      <Box height="75vh">
        <FormControl sx={{
          mt: "1rem"
        }}>
          <InputLabel>View</InputLabel>
          <Select value={view} label="View" onChange={(e) => setView(e.target.value)}>
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>
        <OverViewChart view={view} />
      </Box>
    </Box>
  )
}

export default OverView
