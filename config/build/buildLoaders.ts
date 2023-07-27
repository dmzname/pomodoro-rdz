import webpack from 'webpack';
import { IBuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders({ isDev }: IBuildOptions): webpack.RuleSetRule[] {
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader = buildCssLoader(isDev);

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const imagesLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'assets/images/[name][ext]',
        },
    };

    const fontsLoader = {
        test: /\.(woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'assets/fonts/[name][ext]',
        },
    };

    return [imagesLoader, fontsLoader, svgLoader, cssLoader, tsLoader];
}
