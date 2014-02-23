﻿#pragma strict

var speed : float = 4.0;
var maxDistance : float = 20.0;

function Start () {
	maxDistance = transform.position.x - maxDistance;
}

function Update () {

	var xMove = Time.deltaTime * -speed;

	transform.Translate(xMove, 0, 0);

	var viewPoint = Camera.main.WorldToViewportPoint(transform.position);
	viewPoint.x = Mathf.Clamp01(viewPoint.x);
	viewPoint.y = Mathf.Clamp01(viewPoint.y);

	if(transform.position.x < maxDistance) {
		Destroy(gameObject);
	}

}

function OnCollisionEnter2D(coll : Collision2D) {
	if(coll.gameObject.tag == "Player" || coll.gameObject.tag == "Apple") {
		Destroy(gameObject);
	}
}