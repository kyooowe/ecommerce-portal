//#region Import
import BaseLayout from '@/layouts/BaseLayout'
import { Alert, Box, Button, Checkbox, CircularProgress, Container, FormControlLabel, Grid, Hidden, Snackbar, styled, TextField, Typography } from '@mui/material';
import Head from 'next/head';
import { ReactElement, useEffect, useState } from 'react'
import { authService } from '@/services/auth/auth';
import { useUserStore } from '@/zustand/user/userStore';
import { useRouter } from 'next/router';
import useCookies from '@/hooks/useCookies';
import { useFormik } from 'formik';
import * as yup from 'yup';
import LoadingButton from '@mui/lab/LoadingButton';
import { ILoginCredentials } from '@/interface/auth/login';

const { loginAccount } = authService
//#endregion

//#region Styles
const GridWrapper = styled(Grid)(
	({ theme }) => `
	  background: url('/static/images/backgrounds/login.jpg');
  `
);

const MainContent = styled(Box)(
	() => `
	  height: 100%;
	  display: flex;
	  flex: 1;
	  overflow: auto;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	  background-color: white;
  `
);

const TypographyPrimary = styled(Typography)(
	({ theme }) => `
		color: ${theme.colors.alpha.white[100]};
  `
);

const TypographySecondary = styled(Typography)(
	({ theme }) => `
		color: ${theme.colors.alpha.white[70]};
  `
);

const LoginControlsWrapper = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginTop: '10px',

	paddingLeft: '55px',
	paddingRight: '45px',

	'@media(max-width: 538px)': {
		paddingLeft: '0px',
		paddingRight: '0px'
	}
}

const TextInputMobileClassHelper = {
	width: '80%',
	marginTop: 1,
	'@media(min-Width: 280px)': {
		width: '100%'
	},
	'@media(min-Width: 540px)': {
		width: '80%'
	},
}

const ButtonClassHelper = {
	width: '80%',
	left: 0,
	right: 0,
	margin: '0 auto',
	marginTop: '10px',

	'@media(min-Width: 280px)': {
		width: '100%'
	},
	'@media(min-Width: 540px)': {
		width: '80%'
	},
}
//#endregion

//#region Validation Schema
const validationSchema = yup.object({
	email: yup.string().email('Email must be valid').required("Email is Required"),
	password: yup.string().required("Password is Required"),
})
//#endregion

const Login = () => {

	//#region State Helper
	const router = useRouter();
	const { setCookies } = useCookies()
	//#endregion

	//#region State
	const [isLoading, setIsLoading] = useState<boolean>(false)

	// Snackbar
	const [showSnackbar, setShowSnackbar] = useState<boolean>(false)

	//#endregion

	//#region Zustand
	const storeUser = useUserStore(state => state.storeUser)
	//#endregion

	//#region Formik

	const formik = useFormik<ILoginCredentials>({
		initialValues: {
			email: "",
			password: ""
		},
		validationSchema: validationSchema,
		onSubmit: async (values) => {

			setIsLoading(true)

			const response = await loginAccount({ email: values.email, password: values.password })

			if (response.statusCode === 404) {
				setShowSnackbar(true)
				setIsLoading(false)
			}
			else {
				setCookies('token', response.data.token)
				storeUser(response.data.user)

				router.push('/dashboard/crypto')
			}
		}
	})
	//#endregion

	return (
		<>
			<Head>
				<title>{process.env.NEXT_PUBLIC_BASE_TITLE} Login</title>
			</Head>
			<MainContent>
				<Snackbar
					anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
					open={showSnackbar}
					onClose={() => setShowSnackbar(false)}
					autoHideDuration={5000}
				>
					<Alert severity="error">Invalid Credentials!</Alert>
				</Snackbar>
				<Grid
					container
					sx={{ height: '100%' }}
					alignItems="stretch"
					spacing={0}
				>
					<Grid
						xs={12}
						md={6}
						alignItems="center"
						display="flex"
						justifyContent="center"
						item
					>
						<Container maxWidth="sm">
							<form onSubmit={formik.handleSubmit}>
								<Box textAlign="center">
									<Typography variant="h2" sx={{ my: 2 }}>
										Let's Go in NewBright
									</Typography>
									<Typography
										variant="h4"
										color="text.secondary"
										fontWeight="normal"
										sx={{ mb: 4 }}
									>
										<b>Better</b> and <b>Fast</b> shopping experience awaits you here 🚀
									</Typography>

									<Box>
										<TextField
											label="Email"
											name="email"
											type="email"
											sx={TextInputMobileClassHelper}
											onChange={formik.handleChange}
											value={formik.values.email}
											error={formik.touched.email && Boolean(formik.errors.email)}
											helperText={formik.touched.email && formik.errors.email}
										/>
										<TextField
											label="Password"
											name="password"
											type="password"
											sx={TextInputMobileClassHelper}
											onChange={formik.handleChange}
											value={formik.values.password}
											error={formik.touched.password && Boolean(formik.errors.password)}
											helperText={formik.touched.password && formik.errors.password}
										/>
									</Box>
									<Box sx={LoginControlsWrapper}>
										<Box>
											<FormControlLabel
												control={
													<Checkbox />
												}
												label="Remember Me"
											/>
										</Box>
										<Box>
											<Button variant='text'>Forgot Password</Button>
										</Box>
									</Box>
									{
										isLoading ? (
											<LoadingButton
												sx={ButtonClassHelper}
												fullWidth
												variant="contained"
												loading
											>
												Login Account
											</LoadingButton>
										) : (
											<Button
												sx={ButtonClassHelper}
												fullWidth
												variant="contained"
												type="submit"
											>
												Login Account
											</Button>
										)
									}
								</Box>
							</form>
						</Container>
					</Grid>
					<Hidden mdDown>
						<GridWrapper
							xs={12}
							md={6}
							alignItems="center"
							display="flex"
							justifyContent="center"
							item
						>
							<Container maxWidth="sm">
								<Box textAlign="center">
									<TypographyPrimary variant="h1" sx={{ my: 2 }}>
										Tokyo Free White Next.js Typescript Admin Dashboard
									</TypographyPrimary>
									<TypographySecondary
										variant="h4"
										fontWeight="normal"
										sx={{ mb: 4 }}
									>
										High performance React template built with lots of powerful
										Material-UI components across multiple product niches for
										fast & perfect apps development processes.
									</TypographySecondary>
									<Button href="/" size="large" variant="contained">
										Overview
									</Button>
								</Box>
							</Container>
						</GridWrapper>
					</Hidden>
				</Grid>
			</MainContent>
		</>
	);
}

export default Login

Login.getLayout = function getLayout(page: ReactElement) {
	return <BaseLayout>{page}</BaseLayout>
}