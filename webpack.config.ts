import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { IBuildEnv, IBuildPaths } from './config/build/types/config';

const paths: IBuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
    html: path.resolve(__dirname, 'public', 'index.html'),
};

export default (env: IBuildEnv) => {
    const isDev = env.mode === 'development';

    return buildWebpackConfig({
        mode: env.mode || 'development',
        paths,
        isDev,
        port: env.port || 3000,
    });
};
