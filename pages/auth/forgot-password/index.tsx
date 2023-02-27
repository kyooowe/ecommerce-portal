import {
    Box,
    Card,
    Typography,
    Container,
    Divider,
    Button,
    FormControl,
    OutlinedInput,
    InputAdornment,
    styled
} from '@mui/material';
import Head from 'next/head';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import type { ReactElement } from 'react';
import BaseLayout from 'src/layouts/BaseLayout';

const MainContent = styled(Box)(
    () => `
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
`
);

const TopWrapper = styled(Box)(
    ({ theme }) => `
  display: flex;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing(6)};
`
);

const OutlinedInputWrapper = styled(OutlinedInput)(
    ({ theme }) => `
    background-color: ${theme.colors.alpha.white[100]};
`
);

const ButtonSearch = styled(Button)(
    ({ theme }) => `
    margin-right: -${theme.spacing(1)};
`
);

const ForgotPassword = () => {
    return (
        <>
            <Head>
                <title>{process.env.NEXT_PUBLIC_BASE_TITLE} Forgot Password</title>
            </Head>
            <MainContent>
                <TopWrapper>
                    <Container maxWidth="md">
                        <Box textAlign="center">
                            <img
                                alt="404"
                                height={350}
                                width={400}
                                src="/static/images/auth/forgot-password.png"
                            />
                            <Typography sx={{ color: '#BDBDBD' }}>
                                © StorySet
                            </Typography>
                            <Typography variant="h2" sx={{ my: 2 }}>
                                Forgot Password?
                            </Typography>
                            <Typography
                                variant="h4"
                                color="text.secondary"
                                fontWeight="normal"
                                sx={{ mb: 4 }}
                            >
                                Please enter the email address associated with your account, and we'll send you a link to reset your password.
                            </Typography>
                        </Box>
                        <Container maxWidth="sm">
                            <Card sx={{ textAlign: 'center', mt: 3, p: 4 }}>
                                <FormControl variant="outlined" fullWidth>
                                    <OutlinedInputWrapper
                                        type="text"
                                        placeholder="Enter Email Address here.."
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <ButtonSearch variant="contained" size="small">
                                                    Send Link
                                                </ButtonSearch>
                                            </InputAdornment>
                                        }
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <SearchTwoToneIcon />
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Card>
                        </Container>
                    </Container>
                </TopWrapper>
            </MainContent>
        </>
    );
}

export default ForgotPassword;

ForgotPassword.getLayout = function getLayout(page: ReactElement) {
    return <BaseLayout>{page}</BaseLayout>;
};
