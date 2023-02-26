import React from 'react';
import { Card, Grid, CardContent, CardHeader, Typography, CardMedia } from '@mui/material';


const ListingComponent = ({ listing }) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card>
                <CardHeader title={listing.title} />
                <CardMedia
                    component="img"
                    height="300"
                    image="assets/images/Asset30NinjaIcon.png"
                    alt={listing.title}
                />
                <CardContent>
                    <Typography variant="h2" color="#800000">
                        {listing.value}
                    </Typography>
                    points
                </CardContent>
            </Card>
        </Grid>
    );
}

export default ListingComponent;