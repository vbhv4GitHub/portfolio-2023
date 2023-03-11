import { useMemo } from 'react';
import { useRouter } from 'next/router';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Pagination, { PaginationProps } from '@mui/material/Pagination';

type Props = PaginationProps & { basePath?: string };

const MuiPagination = ({ basePath, ...props }: Props) => {
  const router = useRouter();
  const { slug, page } = router.query as { slug: string; page: string };
  const currentPage = parseInt(page);

  const currentPath = useMemo(() => {
    const path = basePath ? `/${basePath}` : '';
    return slug ? `${path}/${slug}/page` : `${path}/page`;
  }, [basePath, slug]);

  return (
    <Stack
      display="flex"
      justifyContent="space-around"
      flexDirection="row"
      my={4}
    >
      <Pagination
        page={currentPage || 1}
        {...props}
        renderItem={(item) => (
          <PaginationItem
            components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
            onClick={() => router.push(`${currentPath}/${item.page}`)}
          />
        )}
      />
    </Stack>
  );
};

export default MuiPagination;
