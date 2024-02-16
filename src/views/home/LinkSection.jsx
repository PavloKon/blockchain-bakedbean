import { Paper, Typography } from '@mui/material';

const LinkSection = () => {
  return (
    <Paper sx={{ width: '100%', backgroundColor: 'rgb(251, 241, 225)' }}>
      <Typography variant='h5' textAlign='center'>
        Referral Link
      </Typography>
      <Typography fontSize={10}
        textAlign='center'
        p={1}
        border='1px solid #000'
        backgroundColor='#fff'
        my={3}
      >
        https://bakedbeans.io?ref=0xFDd1E7d39085Ec7210498c2786eD4b5D80032104
      </Typography>
      <Typography variant='body2' textAlign='center' px={4}>
        Earn 12% of the BNB used to bake beans from anyone who uses your referral link
      </Typography>
    </Paper>
  );
}

export default  LinkSection;