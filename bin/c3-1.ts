#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { C31Stack } from '../lib/c3-1-stack';

const app = new cdk.App();
new C31Stack(app, 'C31Stack');
