import React from 'react';
import { Card, Grid, CardContent, CardHeader, Typography, CardMedia } from '@mui/material';


const ListingComponent = ({ listing }) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card>
                <CardHeader title="{listing.title}" />
                <CardMedia
                    component="img"
                    height="140"
                    image="assets/images/Artboard@0.5x.png"
                    alt="{listing.title}"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {listing.value}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default ListingComponent;