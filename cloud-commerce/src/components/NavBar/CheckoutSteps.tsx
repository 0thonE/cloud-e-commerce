import React, { useState } from 'react'
import { Box, Typography, Stepper, Step, StepLabel, Button, Divider } from '@mui/material'
import CheckoutForm from './CheckoutForm'
import { Cart } from '@/components'

const getStepContent = (stepIndex: number) => {
  switch (stepIndex) {
    case 0:
      return <Cart />
    case 1:
      return <CheckoutForm />
    default:
      return null
  }
}

const getNextButtonText = (stepIndex: number) => {
  switch (stepIndex) {
    case 0:
      return 'Checkout'
    case 1:
      return 'Place Order'
    default:
      return 'Next'
  }
}

const CheckoutSteps = props => {
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const steps = ['Your Cart', 'Checkout']

  return (
    <Box sx={{ width: 'calc(100% - 2rem)', height: '100%', padding: '0 1rem', mt: 4 }}>
      <Stepper activeStep={activeStep} sx={{ width: 'calc(100% - 1rem)', mb: 4 }}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box>
        {activeStep === steps.length ? (
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant='h5' sx={{ mb: 2 }}>
              Thank you for your order!
            </Typography>
            <Button variant='contained' color='primary' onClick={handleBack}>
              Back to Cart
            </Button>
          </Box>
        ) : (
          <>
            {getStepContent(activeStep)}
            <Box sx={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
              <Divider />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                {!!activeStep && (
                  <Button disabled={activeStep === 0} onClick={handleBack}>
                    Back
                  </Button>
                )}

                <Button
                  sx={{ margin: '1rem', width: 'calc(100% - 2rem)' }}
                  size='large'
                  variant='contained'
                  onClick={handleNext}
                >
                  {getNextButtonText(activeStep)}
                </Button>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Box>
  )
}

export default CheckoutSteps
