import webpack from 'webpack';
import { IBuildOptions } from './types/config';

export function buildResolvers({ paths }: IBuildOptions): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [paths.src, 'node_modules'],
        alias: {},
    };
}
