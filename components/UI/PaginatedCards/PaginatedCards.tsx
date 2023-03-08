import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { Post } from 'contentlayer/generated';
import Cards from 'components/UI/Cards/Cards';
import { POSTS_PER_PAGE } from 'types/constants';
import { Stack, Pagination, PaginationItem, PaginationProps } from '@mui/material';

// Dynamic imports
const ArrowBackIcon = dynamic(() => import('@mui/icons-material/ArrowBack'));
const ArrowForwardIcon = dynamic(() => import('@mui/icons-material/ArrowForward'));

type Props = { posts: Post[] };

const MuiPagination = (props: PaginationProps) => {
  return (
    <Stack display="flex" justifyContent="space-around" flexDirection="row" my={4}>
      <Pagination
        {...props}
        renderItem={(item) => (
          <PaginationItem components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} {...item} />
        )}
      />
    </Stack>
  );
};

const PaginatedCards = ({ posts }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedPosts, setPaginatedPosts] = useState<Post[]>(posts);
  const numberOfPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  useEffect(() => {
    let paginatedPosts: Post[] = [];
    if (numberOfPages > 1) {
      const pageIndex = currentPage - 1;
      paginatedPosts = posts.slice(pageIndex * POSTS_PER_PAGE, pageIndex * POSTS_PER_PAGE + POSTS_PER_PAGE);
      setPaginatedPosts(paginatedPosts);
    } else {
      setPaginatedPosts(posts);
    }
    return () => {
      setPaginatedPosts([]);
    };
  }, [currentPage, posts, numberOfPages]);

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  if (paginatedPosts.length === 0) return null;

  return (
    <>
      <MuiPagination onChange={handlePageChange} count={numberOfPages} />
      <Cards posts={paginatedPosts} />
      <MuiPagination onChange={handlePageChange} count={numberOfPages} />
    </>
  );
};

export default PaginatedCards;
