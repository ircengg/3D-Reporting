
import React, { useEffect, useRef, useState, Suspense } from "react";
import { useGLTF, OrbitControls, Stage, Loader, Html, Text } from "@react-three/drei";
import { Canvas } from '@react-three/fiber'
import Paper from '@mui/material/Paper';
const Component = ({ comp, wireframe, setActiveComponent }) => {
    const [hovered, setHovered] = useState(false)    
    const onPointerOver = (e) => {
        setHovered(true)
    }
    const onPointerOut = (e) => {
        setHovered(false)
    }
    const handleClick = (e) => {
       setActiveComponent(e.eventObject.name)
    }

    return (
        <>
            <mesh
                geometry={comp.geometry}
                name={comp.name}
                onPointerOver={onPointerOver}
                onPointerOut={onPointerOut}
                onContextMenu={() => { }}
                onClick={handleClick}
            >
                <meshStandardMaterial
                    wireframe={wireframe}
                    metalness={1}
                    roughness={0.2}
                    wireframeLinejoin={true}
                    color={hovered ? 'yellow' : 'silver'}
                    transparent
                    opacity={0.95}
                    colorWrite={true}
                />
            </mesh>
        </>
    )
}


export default function Model({ model, components, setRdata }) {
    const [wireframe, setWireframe] = useState(false);
    const [activeComponent, setActiveComponent] = useState(null);

    const { nodes } = useGLTF(model.model);

    useGLTF.preload(model.model);

    const ref = useRef();
    const group = useRef();

    const toggleWireframe = (e) => {
        setWireframe(!wireframe)
    }

    useEffect(() => {
        let cid = components.find(c => c.name === activeComponent ) || {};       
        setRdata(cid)
    }, [activeComponent])

    return (
        <Paper elevation={3} variant="outlined">
            <div>
                <button onClick={toggleWireframe}>{!wireframe ? "Wireframe" : "Solid"}</button>
            </div>
            <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }} style={{ height: '650px' }} >
                <Stage controls={ref} adjustCamera shadows={false} preset="rembrandt" intensity={0} environment="dawn" >
                    <group ref={group}>
                        {
                            Object.entries(nodes).map(([id, node]) => node.type === 'Mesh' && <Component comp={node} wireframe={wireframe} setActiveComponent={setActiveComponent} />)
                        }
                    </group>
                    <axesHelper args={[4]} />
                </Stage>
                <color attach="background" args={["grey"]} />
                <OrbitControls
                    ref={ref}
                    autoRotate={false}
                />
            </Canvas>
        </Paper>
    );
}




// const Equipment = ({ equip, wireframe }) => {
//     const [data_, setData] = useState([]);
//     const group = useRef();

//     useEffect(() => {
//         setData(data);
//     }, [])

//     return (
//         <group ref={group} dispose={null}>
//             {
//                 equip.children && equip.children.map(comp => (
//                     <Component key={comp.uuid} comp={comp} wireframe={wireframe} cdata={find(data_, { component: comp.id }) || {}} />
//                 ))
//             }         
//         </group>
//     )
// }
