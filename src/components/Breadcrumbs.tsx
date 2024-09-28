import { Link as RouterLink, useLocation } from 'react-router-dom';
import Link, { LinkProps } from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box, styled, Typography, Breadcrumbs as MuiBreadcrumbs } from '@mui/material';

const BreadcrumbsContainer = styled(Box)(({theme}) => ({
  padding: theme.spacing(3.2),
}));

const breadcrumbNameMap: { [key: string]: string } = {
  '/category': 'Category',
};

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

function LinkRouter(props: LinkRouterProps) {
  return <Link {...props} component={RouterLink as any} />;
}

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) {
    return null;
  }

  return (
    <BreadcrumbsContainer>
      <MuiBreadcrumbs aria-label="breadcrumb" color='secondary' separator={<NavigateNextIcon fontSize="small" />}>
        <LinkRouter underline="hover" color="secondary" to="/">
          Home
        </LinkRouter>
        {pathnames.map((_value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return last ? (
            <Typography key={to} sx={{ color: 'text.primary' }}>
              {breadcrumbNameMap[to]}
            </Typography>
          ) : (
            <LinkRouter underline="hover" color="secondary" to={to} key={to}>
              {breadcrumbNameMap[to]}
            </LinkRouter>
          );
        })}
      </MuiBreadcrumbs>
    </BreadcrumbsContainer>
  );
}
