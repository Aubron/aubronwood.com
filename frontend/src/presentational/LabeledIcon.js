import React from 'react';
import Typography from '@material-ui/core/Typography';


export default ({Icon, title}) => (
  <div style={{height: 64, width: 64, display: 'inline-block', margin: 8}}>
    <Icon style={{width: '100%', fontSize: 32}} />
    <Typography variant="caption" style={{width: 64, textAlign: 'center'}}>
      {title}
    </Typography>
  </div>
)
