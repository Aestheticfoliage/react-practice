import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Job type
        </Typography>
        <Typography variant="h5" component="div">
          Greens{bull}Set Decoration{bull}Costumes{bull}Photography
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Tenacious
        </Typography>
        <Typography variant="body2">
          Having worked in a wide variety of productions, be it commercial to large budget feature.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Possible linkedin button</Button>
      </CardActions>
    </Card>
  );
}
