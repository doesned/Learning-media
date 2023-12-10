import React, { useState } from "react";
import PageComponent from "../components/PageComponent";
import { useStateContext } from "../context/ContextProvider";
import SurveyListItem from "../components/SurveyListItem";
import TButton from "../components/core/TButton";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
export default function Surveys() {
    const { surveys } = useStateContext();
    console.log(Surveys);

    const onDeleteClick = () => {
        console.log("Delete");
    };


    return (
        <>
            <PageComponent title="Surveys"
            buttons={(
                <TButton color="green" to="/surveys/create">
                    <PlusCircleIcon className="h-6 w-6 mr-2"/>
                    New Survey
                </TButton>
            )}>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
              {surveys.map((survey) => (
                    <SurveyListItem key={survey.id} survey={survey} onDeleteClick={onDeleteClick} />
                ))}
            </div>
            </PageComponent>
        </>
    );
}
