import { Stack, Paper, Typography, Box, Grid, Button, Divider } from '@mui/material';

const NutritionSection = () => {
  return (
    <Paper sx={{ width: '100%' }}>
      <Typography variant='h5' borderBottom='6px solid' pb={2}>
        Nutrition Facts
      </Typography>
      <Stack direction='row' justifyContent='space-between' mt={2}>
        <Typography>
          Daily Return
        </Typography>
        <Typography>
          { `8%` }
        </Typography>
      </Stack>
      <Stack direction='row' justifyContent='space-between' mt={2}>
        <Typography>
          APR
        </Typography>
        <Typography>
          { `2,929%` }
        </Typography>
      </Stack>
      <Stack direction='row' justifyContent='space-between' mt={2}>
        <Typography>
          Dev Fee
        </Typography>
        <Typography>
          { `3%` }
        </Typography>
      </Stack>
    </Paper>
  );
}

export default  NutritionSection;