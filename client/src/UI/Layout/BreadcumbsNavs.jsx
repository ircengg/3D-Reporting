import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {
    Link,
    MemoryRouter,
    useLocation,
} from 'react-router-dom';



export default () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" to="/">
                Home
            </Link>
            {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                const to = `${pathnames.slice(0, index + 1).join('/')}`;

                return last ? (
                    <Typography color="text.primary" key={to}>
                        {value}
                    </Typography>
                ) : (
                    <Link underline="hover" color="inherit" to={to} key={to}>
                        {value}
                    </Link>
                );
            })}
        </Breadcrumbs>
    );
};
