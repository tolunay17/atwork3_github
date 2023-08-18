import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// React Router v6 imports
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route
} from "react-router-dom";

// Custom compoments
import App from './app';

// Utilities
import { ContactPage, PortfoliosPage, AboutPage, BlogDetailsPage, BlogsPage, CommunitiesPage, HomePage, PostDetailsPage, PostsPage, SignInPage, SignUpPage,TeamDetailsPage, TeamsPage } from './app/pages';
import { AuthProvider, GraphCMSProvider } from './app/context';
import { AdminLayout, PublicLayout, UserLayout } from './app/components/layout';

ReactDOM.render(
  <GraphCMSProvider>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            {/*  Not logged in*/}
            <Route path="/" element={<PublicLayout />}>
              <Route index element={<HomePage />} />
              <Route path="home" element={<Navigate to="/" replace={true} />} />
              <Route path="posts" element={<PostsPage />} />  
              <Route path="posts/:postId" element={<PostDetailsPage />} />
              <Route path="communities" element={<CommunitiesPage />} /> 
              <Route path="blogs" element ={<BlogsPage/>} />
              <Route path="blogs/:blogId" element ={<BlogDetailsPage/>} />
              <Route path="teams" element ={<TeamsPage/>} />
              <Route path="teams/:teamId" element ={<TeamDetailsPage/>} />
              {/* <Route path="portfolio" element ={<PortfoliosPage/>} /> */}
              <Route path="portfolio" element ={<PortfoliosPage/>} />
              <Route path="about" element ={<AboutPage/>} />
              <Route path="contact" element ={<ContactPage/>} />
              {/* <Route path='Opleiding' element ={<TeamDetailsPage/>} /> */}
            </Route> 
{/* /Not logged in End */}

            <Route path='auth'>
              <Route path='signin' element={<SignInPage />} />
              <Route path='signup' element={<SignUpPage />} />
            </Route>
            <Route path="user" element={<UserLayout />}>
              <Route index element ={<HomePage/>} />
              <Route path="profile" element ={<PostsPage/>} />
            </Route>
            <Route path="admin" element={<AdminLayout />}>
              <Route index element ={<HomePage/>} />
              <Route path="posts" element ={<PostsPage/>} />
            </Route>
            <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
          </Route>
        </Routes>
      </BrowserRouter>   
    </AuthProvider> 
  </GraphCMSProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
