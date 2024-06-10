import './App.css';
import { Box, ChakraProvider, theme, useToast } from '@chakra-ui/react';
import { AuthChangeEvent, Session } from '@supabase/supabase-js';
import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Auth } from '@supabase/auth-ui-react'
import {supabase, ThemeSupa} from '@supabase/auth-ui-shared'
import { supabaseClient } from './config/supabase-client';
import RootLayout from './components/templates/RootLayout';
import Signin from './components/pages/Auth/Signin';




export default function App() {


return (
    <ChakraProvider theme={theme}>
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<Signin />} />

        </Routes>
      </RootLayout>
    </BrowserRouter>
    </ChakraProvider>
  )
}


