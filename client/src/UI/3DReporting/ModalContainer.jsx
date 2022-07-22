
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { List, ListItem, IconButton, Icon, Typography } from '@mui/material';
import React, { useEffect, useRef, useState, Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { Loader } from "@react-three/drei";

import Model from './Model'
import Table from '../DataGrid/Table'
import Report from './Report';

import './index.scss'
import { getComponents, getModel } from '../../Apis/models';


const ModalContainer = () => {
    const [activeModel, setActiveModel] = useState({});
    const [components, setComponents] = useState([]);
    const [rData, setRdata] = useState({});

    let { modelId } = useParams();

    const ref = useRef();


    useEffect(() => {
        (async () => {
            const model_ = await getModel(modelId);
            setActiveModel(model_);
            const components_ = await getComponents(modelId)
            setComponents(components_)
        })();
    }, [])


    return (
        <>           
            <Suspense fallback={<Loader dataStyles={{ fontSize: '40px' }} />}>
                {
                    activeModel.model && (
                        <div>
                            <Grid container spacing={1}>
                                <Grid item md={8} lg={8}>
                                    <Model model={activeModel} components={components} setRdata={setRdata} />
                                </Grid>
                                <Grid item md={4} lg={4}>
                                    {rData.name? <Report data={rData} /> : <Typography component={'h4'} sx={{textAlign:'center'}}>No Data</Typography>}
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item md={12} lg={12}>
                                    <Table rows={components} />
                                </Grid>
                            </Grid>
                        </div>
                    )
                }
            </Suspense>
        </>
    );
}




export default ModalContainer