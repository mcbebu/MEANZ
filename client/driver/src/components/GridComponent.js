import React, { useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { Grid } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import ListingComponent from './ListingComponent';


const useStyles = makeStyles()((theme) => {
    return {
        root: {
            flexGrow: 1,
            padding: theme.spacing(2)
        }
    };
});

const GridComponent = () => {
    const classes = useStyles();
    const getListings = useStoreActions(actions => actions.listings.getListings);
    const listings = useStoreState(state => state.listings.listings);

    useEffect(() => {
        getListings();
    }, [getListings]);

    return (
        <div className={classes.root}>
            <Grid container spacing={2} direction="row" justify="flex-start" alignItems="flex-start">
                {listings.map((listing) => {
                    return (
                        <ListingComponent key={listings.indexOf(listing)} listing={listing} />
                    )
                })}
            </Grid>
        </div>
    );
}

export default GridComponent;