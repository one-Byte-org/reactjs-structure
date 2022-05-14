import { SignUp, Login, ForgetPass } from 'Pages';

const getRoutes = () => {
    return [
        {
            element: <SignUp />,
            path: 'sign-up'
        },
        {
            element: <Login />,
            path: 'login'
        },
        {
            element: <ForgetPass />,
            path: 'forget-pass'
        }
        // {
        //     element: <MainLayout />,
        //     path: '',
        //     children: [
        //         {
        //             index: true,
        //             element: <Dashboard />
        //             // path: 'adad'
        //         },
        //         {
        //             element: <Messages />,
        //             path: 'messages'
        //         },
        //         {
        //             element: <Opportunities />,
        //             path: 'opportunities'
        //         },
        //         {
        //             element: <CommunityFeed />,
        //             path: 'community-feed'
        //         },
        //         {
        //             element: <TrainingTrack />,
        //             path: 'training-track'
        //         },
        //         {
        //             element: <Interviews />,
        //             path: 'interviews'
        //         },
        //         {
        //             element: <UserProfile />,
        //             path: 'profile'
        //         },
        //         {
        //             element: <OpportunitiesApply />,
        //             path: 'opportunities/apply'
        //         },
        //         {
        //             element: <Notification />,
        //             path: 'notification'
        //         },
        //         {
        //             element: <EditProfile />,
        //             path: 'profile/edit'
        //         }
        //     ]
        // },
        // {
        //     path: '*',
        //     element: <Page404 />
        // }
    ];
};

export default getRoutes;
