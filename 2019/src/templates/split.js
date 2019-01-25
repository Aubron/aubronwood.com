import React from 'react';
import Grid from '@material-ui/core/Grid'

export default ({left,right}) => {
    return (
        <Grid container spacing={24}>
            <Grid item xs={12} md={6}>
                {left}
            </Grid>
            <Grid item xs={12} md={6}>
                {right}
            </Grid>
        </Grid>
    )
}