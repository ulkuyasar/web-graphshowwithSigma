import { Component, OnInit } from '@angular/core';
import * as sigma from 'sigma';



@Component({
  selector: 'app-graph-compleks-page',
  templateUrl: './graph-compleks-page.component.html',
  styleUrls: ['./graph-compleks-page.component.css']
})
export class GraphCompleksPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var s = new sigma(
      {
        renderer: {
          container: document.getElementById('sigma-container'),
          type: 'canvas'
        },
        settings: {
          minArrowSize: 10
        }
      }
    );
    
    // Generate a random graph:
    var nbNode = 50;
    var nbEdge = 100;
    var graph = {
      nodes: [],
      edges: []
    };
    for (let i = 0; i < nbNode; i++)
      graph.nodes.push({ 
        id:  i,
        label: 'Node ' + i,
        x: Math.random(),
        y: Math.random(),
        size: 1,
        color: '#EE651D'
      });
    
    for (let i = 0; i < nbEdge; i++)
      graph.edges.push({ 
        id: i, 
        source: '' + (Math.random() * nbNode | 0), 
        target: '' + (Math.random() * nbNode | 0),
        color: '#202020',
        type: 'curvedArrow'
      });
    
    
    // load the graph
    s.graph.read(graph);
    // draw the graph
    s.refresh();
    // launch force-atlas for 5sec
    s.startForceAtlas2();
    window.setTimeout(function() {s.killForceAtlas2()}, 10000);
    
  }


}
