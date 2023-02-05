import dayjs from 'dayjs';
import Link from 'next/link';
import { AppBar } from '@mui/material';
import MuiLink from '@mui/material/Link';
import Text from 'components/UI/MuiComponents/Text';

const Footer = () => {
  return (
    <AppBar component="footer" position="static" sx={{ py: 3 }}>
      <Text color="GrayText">
        <>
          © {`${dayjs().year()} `}
          <MuiLink component={Link} href="/" underline="none">
            vbhv4WebDev™
          </MuiLink>
          . All Rights Reserved.
        </>
      </Text>
    </AppBar>
  );
};

export default Footer;
