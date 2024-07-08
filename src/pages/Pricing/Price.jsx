import { DoneRounded } from '@mui/icons-material'
import { Button, Typography } from '@mui/material'
import React from 'react'

const Price = () => {
  return (
         <div
            className="bg-dark-card px-14 flex items-center rounded-lg py-10 gap-5 flex-col aos-init aos-animate "
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <Typography variant="h5"> Pricing Plans</Typography>
            <Typography variant="caption" color="GrayText">
              Perfect for private individuals
            </Typography>
            <Typography variant="caption" color="GrayText">
              Starting at:
            </Typography>
            <Typography className="flex " variant="h5" color="primary">
              <sub>$</sub>
              <p>8</p>
              /mo
            </Typography>
            <ul className="list-none">
              <li>
                <DoneRounded color="primary" /> 100 Projects
              </li>
              <li>
                <DoneRounded color="primary" />
                Download prototypes
              </li>
              <li>
                <DoneRounded color="primary" /> Graphic Images
              </li>
            </ul>
            <Button
              variant="contained"
              sx={{
                p: "10px 15px",
                width: {
                  sm: "50%",
                  xs: "100%",
                },
              }}
              color="secondary"
            >
              Get start
            </Button>
          </div>
  )
}

export default Price