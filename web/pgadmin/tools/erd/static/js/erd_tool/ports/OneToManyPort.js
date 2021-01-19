/////////////////////////////////////////////////////////////
//
// pgAdmin 4 - PostgreSQL Tools
//
// Copyright (C) 2013 - 2021, The pgAdmin Development Team
// This software is released under the PostgreSQL Licence
//
//////////////////////////////////////////////////////////////

import { PortModel } from '@projectstorm/react-diagrams-core';
import {OneToManyLinkModel} from '../links/OneToManyLink';
import { AbstractModelFactory } from '@projectstorm/react-canvas-core';

const TYPE = 'onetomany';

export default class OneToManyPortModel extends PortModel {
  constructor({options}) {
    super({
      ...options,
      type: TYPE,
    });
  }

  removeAllLinks() {
    Object.values(this.getLinks()).forEach((link)=>{
      link.remove();
    });
  }

  createLinkModel() {
    return new OneToManyLinkModel({});
  }
}

export class OneToManyPortFactory extends AbstractModelFactory {
  constructor() {
    super(TYPE);
  }

  generateModel(event) {
    return new OneToManyPortModel(event.initialConfig||{});
  }
}
