import {file_exists, file_get_contents, json_decode, file_put_contents, json_encode, unlink, array_diff, scandir, is_readable, is_writable, is_dir} from '../PhpCommands'
import { string } from '@oclif/command/lib/flags';

class Filestore {

    $directory: string

    constructor($directory: string)
    {
      this.$directory = $directory;
    }

    /**
     * Reads retrieves data from the store
     *
     * @param string $key A key
     * @return mixed The value fpr the given key or null.
     * @throws \Pantheon\Terminus\Exceptions\TerminusException
     */
    get($key: string)
    {
        let $out = null;
        // Read the json encoded value from disk if it exists.
        let $path = this.getFileName($key)
        if (file_exists($path)) {
            $out = file_get_contents($path);
            $out = json_decode($out, true);
        }
        return $out;
    }

    /**
     * Saves a value with the given key
     *
     * @param string $key A key
     * @param mixed $data Data to save to the store
     * @throws \Pantheon\Terminus\Exceptions\TerminusException
     */
    set($key: string, $data:string )
    {
        let $path = this.getFileName($key, true);
        file_put_contents($path, json_encode($data));
    }

    /**
     * Checks if a key is in the store
     *
     * @param string $key A key
     * @return bool Whether a value exists with the given key
     * @throws \Pantheon\Terminus\Exceptions\TerminusException
     */
    has($key:string)
    {
        let $path = this.getFileName($key);
        return file_exists($path);
    }

    /**
     * Remove value from the store
     *
     * @param string $key A key
     * @throws \Pantheon\Terminus\Exceptions\TerminusException
     */
    remove($key:string)
    {
        let $path = this.getFileName($key, true);
        if (file_exists($path)) {
            unlink($path);
        }
    }

    /**
     * Remove all values from the store
     *
     * @throws \Pantheon\Terminus\Exceptions\TerminusException
     */
    removeAll()
    {
        // this.keys().array.forEach(element => {
          
        // });            this.remove($key);
        // }
    }

    /**
     * Return a list of all keys in the store.
     * @return array A list of keys
     */
    keys()
    {
        let $root = this.$directory;
        if (file_exists($root) && is_readable($root)) {
            let scan = scandir($root)
            let levels = ['..', '.']
            return array_diff(scan, levels);
        }
        return [];
    }

    /**
     * Get a valid file name for the given key.
     * @param string $key The data key to be written or read
     * @return string A file path
     * @throws TerminusException
     */
    protected getFileName($key:string, $writable = false)
    {
        // $key = $this->cleanKey($key);

        // if ($writable) {
        //     $this->ensureDirectoryWritable();
        // }

        // if (!$key) {
        //     throw new TerminusException('Could not save data to a file because it is missing an ID');
        // }
        return this.$directory + '/' + $key;
    }

    /**
     * Make the file path safe by whitelisting characters.
     * This is a very naive approach to hashing but in practice this doesn't matter since this is only used for a
     * few already safe keys.
     *
     * @param $key
     * @return mixed
     */
    cleanKey($key: string)
    {
        return $key.replace('/[^a-zA-Z0-9\-\_\@\.]/', '-');
    }

    /**
     * Check that the directory is writable and create it if we can.
     *
     * @throws \Pantheon\Terminus\Exceptions\TerminusException
     */
    ensureDirectoryWritable()
    {
        // Reality check to prevent stomping on the local filesystem if there is something wrong with the config.
        if (!this.$directory) {
            // throw new TerminusException('Could not save data to a file because the path setting is mis-configured.');
            throw new Error('Could not save data to a file because the path setting is mis-configured.')

        }

        let $writable = is_dir(this.$directory) || (!file_exists(this.$directory));
        $writable = $writable && is_writable(this.$directory);
        if (!$writable) {
          throw new Error('Could not save data to a file because the path {path} cannot be written to.')

        }
    }
}