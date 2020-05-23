import React, { Suspense } from "react";
import { Preloader } from "./Preloader";

export const withPreloader = <TProps extends object = {}>(Component: React.ComponentType<TProps>): React.ComponentType<TProps> => (
    (props) => (
        <Suspense fallback={<Preloader>loading...</Preloader>}>
            <Component {...props}/>
        </Suspense>
    )
);