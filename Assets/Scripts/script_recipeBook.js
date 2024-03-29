﻿#pragma strict

var changeState:boolean;
var isLooking:boolean;
var createdElements: Array;
var	isOpened = false;

function Start () {
	changeState = true;
	
}

function Update () {

	createdElements = GameObject.Find("MixWizard").GetComponent(script_mixHandler).alreadyExists;

	isLooking = GameObject.Find("Player").GetComponent(script_ObjectInteraction).isRecipeBook;

	if(Input.GetKeyDown(KeyCode.R) && changeState && isLooking == true) {
		changeState = false;
		isOpened = true;
		GameObject.Find("GUIController").SendMessage("OnGUI");
	}
	else if(Input.GetKeyDown(KeyCode.R) && changeState == false) {
		changeState = true;
		isOpened = false;
		GameObject.Find("GUIController").SendMessage("OnGUI");
	}

}