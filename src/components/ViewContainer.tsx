import React from 'react';
import MasterView from './MasterView'

interface Props {
    currentView: string;
    onViewSelected: (view: string) => void;
}

export default function ViewContainer(props: Props) {

    const detailViews = ['forest', 'sky', 'desert'];

    if (props.currentView === '') {
        return <MasterView detailViews={detailViews} onDetaleViewSelected={props.onViewSelected} />

    } else {
        return (
            <div>XZ</div>
        )
    }
}